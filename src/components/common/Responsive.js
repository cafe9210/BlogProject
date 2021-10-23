import styled from 'styled-components'

const ResponsiveBlock = styled.div`
padding-left: 1rem;
padding-right: 1rem;
width: 1024px;
margin: 0 auto;

@media (max-width: 1024px){
    width: 768px;
}

@media (max-width: 768px){
    width: 100%;
}
`

const Responsive = ({ children, ...rest }) => {
    // 다른 데서 구현된 children 부분에 ...rest 및 ResponsiveBlock 스타일 적용이 된다?
    return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>
}

export default Responsive;
