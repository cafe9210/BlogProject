import Editor from '../../components/write/Editor'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useCallback } from 'react'
import { changeField, initialize } from '../../modules/write'

// Quill 에디터는 일반 input 이나 textarea 가 아니기 때문에 onChange 와 value 값을 사용하여 상태를 관리할 수 없다.
// 따라서 지금은 에디터에서 값이 바뀔 때 리덕스 스토어에 넣는 작업만 하고 리덕스 스토어의 값이 바뀔 때 에디터 값이 바뀌게 하는 작업은
// 추후 포스트 수정 기능을 구현할 때 처리한다.

const EditorContainer = () => {
    const dispatch = useDispatch()
    const {title, body} = useSelector(({write}) => ({
        title: write.title,
        body: write.body,
    }))
    
    const onChangeField = useCallback(payload => dispatch(changeField(payload)),[
        dispatch,
    ])

    useEffect(() => {
        return () => {
            dispatch(initialize())
        }
    }, [dispatch])
    return <Editor onChangeField={onChangeField} title={title} body={body}/>
}

export default EditorContainer