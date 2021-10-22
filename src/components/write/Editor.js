import Quill from 'quill' // 글 작성하는 Editor 라이브러리
import { useRef, useEffect } from 'react'
import 'quill/dist/quill.bubble.css'
import styled from 'styled-components' // css in js 관련 리액트 라이브러리 중에서 가장 인기있는 라이브러리
import palette from '../../lib/styles/palette'
import Responsive from '../common/Responsive'

// 스타일 적용
// input 부분에 ResponsiveBlock 스타일 + 아래 스타일이 적용이 된다?
const EditorBlock = styled(Responsive)`
padding-top: 5rem;
paddin-bottom: 5rem;
`
const TitleInput = styled.input`
font-size: 3rem;
outline: none;
padding-bottom: 0.5rem;
border: none;
border-bottom: 1px solid ${palette.gray[4]}`

const QuillWrapper = styled.div`
.ql-editor{
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
}
`

const Editor = () => {
    const quillElement = useRef(null);  // Quill 을 적용할 DOM(DivElement) 를 설정
    const quillInstance = useRef(null); // Quill 인스턴스 설정

    useEffect(() => {
        quillInstance.current = new Quill(quillElement.current, {
            theme: 'bubble',
            placeholder: '내용을 작성하세요...',
            modules: {
                toolbar: [
                    [{ header: '1' }, { header: '2' }],
                    ['bold', 'italic', 'underlinde', 'strike'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['blockquote', 'code-block', 'link', 'image'],
                ],
            }
        })
    }, [])

    return (
        <EditorBlock>
            <TitleInput placeholder="제목을 입력하세요" />
            <QuillWrapper>
                <div ref={quillElement} />
            </QuillWrapper>
        </EditorBlock>
    )
}

export default Editor;


