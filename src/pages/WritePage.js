import Editor from '../components/write/Editor'
import Responsive from '../components/common/Responsive';
import TagBox from '../components/write/TagBox';
import WriteActionButton from '../components/write/WriteActionButton'

const WritePage = () => {
    return(
        <Responsive>
            <Editor/>
            <TagBox/>
            <WriteActionButton/>
        </Responsive>
    )
};

export default WritePage;