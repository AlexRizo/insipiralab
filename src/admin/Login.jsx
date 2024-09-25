import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useAuthStore } from "../hooks";

export const Login = () => {
    const { user } = useSelector(state => state.auth);

    if (user) return <Navigate to="/admin" />

    const { firebaseLogin } = useAuthStore();
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = handleSubmit((data) => {
        firebaseLogin(data);
    })
    
    return (
        <section className="w-full flex items-center justify-center h-[600px]">
            <form onSubmit={ onSubmit } className="border py-5 px-8 rounded bg-white text-black flex flex-col gap-4">
                <div className="flex flex-col my-2">
                    <label htmlFor="email" className="font-medium text-lg">Correo</label>
                    <input 
                        placeholder="example@email.com"
                        type="email"
                        name="email"
                        id="email"
                        className="border-b border-black focus:outline-none focus:bg-gray-100 focus:border-[#E71567] p-2 transition text-gray-700"
                        { ...register('email', { required: {
                            value: true,
                            message: 'Correo obligatorio'
                        }})}
                    />
                    <span className={`text-red-500 text-sm mt-2 transition-[max-height_opacity] duration-300 max-h-0 opacity-0 ${ errors.email && 'max-h-5 opacity-100' }`}>* { errors.email?.message }</span>
                </div>
                <div className="flex flex-col my-2">
                    <label htmlFor="password" className="font-medium text-lg">Contraseña</label>
                    <input 
                        placeholder="•••••••••••••"
                        type="password"
                        name="password"
                        id="password"
                        className="border-b border-black focus:outline-none focus:bg-gray-100 focus:border-[#E71567] p-2 transition text-gray-700"
                        { ...register('password', { required: {
                            value: true,
                            message: 'Contraseña obligatoria'
                        }})}
                    />
                    <span className={`text-red-500 text-sm mt-2 transition-[max-height_opacity] duration-300 max-h-0 opacity-0 ${ errors.password && 'max-h-5 opacity-100' }`}>* { errors.password?.message }</span>
                </div>
                <button type="submit" className="bg-[#E71567] text-white py-2 rounded">Iniciar Sesión</button>
            </form>
        </section>
    )
}
