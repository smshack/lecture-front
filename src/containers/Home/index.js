import React, { useEffect, useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";

const Home = ({name}) => {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];
  useEffect(() => {
    console.log(name);
  }, [name]);
  return (
     <UserList users={users} />
  );
};

Home.defaultProps = {
  name: "초기값",
};

export default Home;

const User =({ user }) => {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

UserList.propTypes = {
  users:PropTypes.array,
};