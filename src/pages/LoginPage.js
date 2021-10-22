import AuthTemplete from '../components/auth/AuthTemplate'
import LoginForm from '../containers/auth/LoginForm';

const LoginPage = () => {
    return (
        <AuthTemplete>
            <LoginForm />
        </AuthTemplete>
    );
};

export default LoginPage;