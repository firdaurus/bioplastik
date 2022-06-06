import axios from "axios";
import { useState, useEffect } from "react";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setToken, setName } from "../../redux/slices/authSlice";

export default function Login() {

	const dispatch = useAppDispatch();
	const token = useAppSelector(state => state.auth.token);
	const navigate = useNavigate();

    const [ errorMsg, setErrorMsg ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const [ showPassword, setShowPassword] = useState(false);
    const [ password, setPassword] = useState("");

	useEffect(() => {
		if (token) {
			navigate("/admin/dashboard", { replace:true });
		}
	}, [token, navigate]);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		try{
			const res = await axios.post(`${ process.env.REACT_APP_API_HOST }/auth/login`, {
				username,
				password,
			});
			const data = res.data;
			dispatch(setToken(data.token));
			dispatch(setName(data.name));
			navigate("/admin/dashboard", { replace:true });
		} catch (e: any){
			if (e.response) {
				setErrorMsg(e.response.data?.message ?? "Terjadi kesalahan pada server")
			} else {
				setErrorMsg("Terjadi kesalahan. Silakan coba lagi")
			}
		} finally {
			setLoading(false);
		}
    }

	return (
		<div className="w-screen min-h-screen overflow-x-hidden flex">
			<div className="hidden"></div>
			<div className="flex justify-center items-center w-full">
				<div className="flex flex-col items-center">
					{/* <img src={logo} alt="logo" className="w-24" /> */}
					<h1
						id="login-title"
						className="text-xl font-bold mt-8"
					>
						Masuk
					</h1>
					{errorMsg && (
						<div role="alert" className="alert-error text-center">
							{errorMsg}
						</div>
					)}
					<form className="flex flex-col gap-3" onSubmit={ handleLogin }>
						<div>
							<label htmlFor="username">Username</label>
							<input
								id="username"
								onChange={(e) => setUsername(e.target.value)}
								type="text"
								className="border border-gray-400 rounded py-2 px-3 text-gray-700 w-full disabled:opacity-75"
								disabled={loading}
							/>
						</div>
						<div className="relative">
							<label htmlFor="password">Password</label>
							<input
								id="password"
								onChange={(e) => setPassword(e.target.value)}
								type={showPassword ? "text" : "password"}
								disabled={loading}
								className="border border-gray-400 rounded py-2 px-3 text-gray-700 w-full disabled:opacity-75"
							/>
							<div className="absolute bottom-3 right-2 text-lg text-gray-700">
								{showPassword ? (
									<BsEyeSlashFill
										data-testid="hide-password"
										onClick={() => setShowPassword(false)}
									/>
								) : (
									<BsEyeFill
										data-testid="show-password"
										onClick={() => setShowPassword(true)}
									/>
								)}
							</div>
						</div>
						<button
							id="submit-button"
							disabled={loading}
							className="bg-sky-500 text-white rounded py-2 px-4 text-sm w-full disabled:opacity-75"
							type="submit"
						>
							{loading ? "Loading..." : "Masuk"}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
