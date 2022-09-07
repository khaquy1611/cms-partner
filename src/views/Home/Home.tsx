import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { Button, Card, message, Skeleton, Space, Switch } from "antd";
import PrivateLayout from "./../../components/layouts/PrivateLayout/index";
import { useNavigate } from "react-router-dom";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { Api } from "@api/Api";

const Home = () => {
  const navigate = useNavigate();
  const { switcher, themes } = useThemeSwitcher();
  const [theme, setTheme] = useLocalStorage('theme')

  const fetchUser = async () => {
    const res = await Api.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  };

  const { isLoading, data: users } = useQuery("users", fetchUser);

  const addTodo = (newTodo: any) => {
    return Api.post("https://jsonplaceholder.typicode.com/posts", newTodo);
  };

  const { mutate } = useMutation(addTodo, {
    onError: (error: Error) => {
      message.error(error.message);
    },
    onSuccess: () => {
      message.success("Success");
    },
  });

  const onChange = (checked: boolean) => {
    setTheme(checked ? themes.dark : themes.light)
    switcher({ theme: checked ? themes.dark : themes.light });
  };

  return (
    <>
      <Button onClick={() => mutate({ title: "foo", body: "bar", userId: 1 })}>
        Mutate data
      </Button>
      <Button
        onClick={() => {
          navigate("/login", { replace: true });
        }}
      >
        push to login
      </Button>

      <Space size='middle'>
        <Switch defaultChecked={theme === themes.dark} onChange={onChange} />
      </Space>
      {users?.map((user: any) => {
        return (
          <Card title={user.name}>
            <p>{user.phone}</p>
          </Card>
        );
      })}
      <Skeleton loading={isLoading} />
    </>
  );
};

export default Home;
