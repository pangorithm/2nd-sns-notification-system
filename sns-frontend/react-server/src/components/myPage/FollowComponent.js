import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const MemberListBox = styled.div`
  margin-left: 18px;
  width: 80%;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
`;

const MemberItem = styled.div`
  margin-top: 0px;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  border-bottom: 1px solid #ccc;
`;

const MemberPhoto = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;

const MemberLink = styled.a`
  margin-top: 25px;
  text-decoration: none;
  color: black;
`;

const ToggleLabel = styled.label`
  margin-top: 25px;
  color: #426b1f;
  background-color: transparent;
`;

const FollowComponent = ({
  user,
  followListData,
  handleFollow,
  handleUnfollow,
  followMemberSet,
  show,
}) => {
  return (
    <MemberListBox>
      <h3>{show === 'following' ? '🌱 팔로잉 리스트' : ''}</h3>
      <h3>{show === 'follower' ? '🌱 팔로워 리스트' : ''}</h3>
      {Array.isArray(followListData) &&
        followListData.map((followItem, index) => (
          <MemberItem key={followItem.no}>
            <MemberPhoto
              src={
                followItem.photo
                  ? `https://kr.object.ncloudstorage.com/bitcamp-nc7-bucket-14/sns_member/${followItem.photo}`
                  : 'images/default.jpg'
              }
            />
            <MemberLink href={`/myPage/${followItem.no}`}>
              {followItem.nick}
            </MemberLink>
            <Link to={`/room?mno1=${followItem.no}&mno2=${user.no}`}>
              채팅하기
            </Link>
            {followMemberSet.includes(followItem.no) ? (
              <button onClick={() => handleUnfollow(followItem.no)}>
                팔로잉 취소
              </button>
            ) : (
              <button onClick={() => handleFollow(followItem.no)}>
                팔로우 하기
              </button>
            )}
          </MemberItem>
        ))}
    </MemberListBox>
  );
};

export default FollowComponent;
