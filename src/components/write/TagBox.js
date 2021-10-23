import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { useState, useCallback, useEffect } from "react";
// import { startLoading } from "../../modules/loading";

const TagBoxBlock = styled.div`
  width: 100%;
  border-top: 1px solid ${palette.gray[2]};
  padding-top: 2rem;

  h4 {
    color: ${palette.gray[8]};
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

const TagForm = styled.form`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  width: 256px;
  border: 1px solid ${palette.gray[9]};
  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }

  input {
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
  }

  button {
    cursor: pointer;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    background: ${palette.gray[8]};
    color: white;
    font-weight: bold;
    &:hover {
      background: ${palette.gray[6]};
    }
  }
`;

const Tag = styled.div`
  margin-right: 0.5rem;
  color: ${palette.gray[6]};
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

// 렌더링을 최적화하기 위해서 컴포넌트 분리 TagItem / TagList
// TagBox 에서 렌더링 하는 상황은 두 가지
// 1. input 이 바뀔 때
// 2. tag 목록이 바뀔 때

// React.memo 를 사용해서 컴포넌트를 감싸주면 실제로 컴포넌트가 받아오는 props 가 변경되었을 때만 리렌더링 해준다.
// tag 값이 바뀔 때만 리렌더링 되도록 처리
const TagItem = React.memo(({ tag, onRemove }) => (
  <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));

const TagList = React.memo(({ tags, onRemove }) => (
  <TagListBlock>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListBlock>
));

const TagBox = ({ tags, onChangeTags }) => {
  const [input, setInput] = useState("");
  const [localTags, setLocalTags] = useState([]);

  // 태그 추가할 때
  const insertTag = useCallback(
    (tag) => {
      if (!tag) return;
      if (localTags.includes(tag)) return;
      const nextTags = [...localTags, tag];
      setLocalTags(nextTags);
      onChangeTags(nextTags);  // 태그 리스트가 변경(입력, 삭제)되는 것에 대한 log
      console.log(nextTags);
    },
    [localTags, onChangeTags]
  );
 // 태그 삭제 할 때
  const onRemove = useCallback(
    (tag) => {
      const nextTags = localTags.filter((t) => t !== tag);
      setLocalTags(nextTags);
      onChangeTags(nextTags);
      console.log(localTags, tag);
    },
    [localTags, onChangeTags]
  );

  // 태그 입력 창에 값이 입력 혹은 바뀌는 거 실시간으로 받음
  const onChange = useCallback((e) => {
    setInput(e.target.value); // input 에서 받은 값 추출
    console.log("onChange:", e.target.value);
  }, []);

  
  // 태그 추가 할 때
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      insertTag(input.trim());
      setInput(""); // 태그 추가하는 공간 초기화
    },
    [input, insertTag]
  );

  // tags 값이 바뀌었을 때
  useEffect(() => {
    setLocalTags(tags);
    console.log("onChangeTags: " ,tags);
  }, [tags]);

  return (
    <TagBoxBlock>
      <h4>태그</h4>
      <TagForm onSubmit={onSubmit}>
        <input
          placeholder="태그를 입력하세요."
          value={input}
          onChange={onChange}
        />
        <button type="submit">추가</button>
      </TagForm>
      <TagList tags={localTags} onRemove={onRemove} />
    </TagBoxBlock>
  );
};

// const TagBox = () => {
//   return (
//     <TagBoxBlock>
//       <h4>태그</h4>
//       <TagForm>
//         <input placeholder="태그를 입력하세요" />
//         <button type="submit">추가</button>
//       </TagForm>
//       <TagList tags={["태그1", "태그2", "태그3"]} />
//     </TagBoxBlock>
//   );
// };

export default TagBox;
