import AuthTemplete from '../components/auth/AuthTemplate'
import AuthForm from '../components/auth/AuthForm'

const RegisterPage = () => {
    return (
        <AuthTemplete>
            <AuthForm type="register" />
        </AuthTemplete>
    );
};

export default RegisterPage;