import EditorContainer from "../containers/write/EditorContainer";
import Responsive from "../components/common/Responsive";
// import TagBox from '../components/write/TagBox';
// import WriteActionButton from '../components/write/WriteActionButton'
import TagBoxContainer from "../containers/write/TagBoxContainer";
import WriteActionButtonsContainer from "../containers/write/WriteActionButtonContainer";

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;
