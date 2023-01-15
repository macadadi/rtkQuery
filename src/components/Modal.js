import { useUpdateUserMutation } from "../features/api/apiSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./modal.css";

const Modal = ({ user, handleModal }) => {
	const [addNewPost, { isLoading }] = useUpdateUserMutation();
	const [isupdated, setIsUpdated] = useState(false);
	const [updateError, setUpdateError] = useState(undefined);
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty },
	} = useForm({
		reValidateMode: "onChange",
		defaultValues: {
			...user,
		},
	});
	const submitUpdate = async (data) => {
		let payload = {
			...data,
			_id: user._id,
		};
		try {
			await addNewPost(payload)
				.unwrap()
				.then(() => setIsUpdated(true));
		} catch (err) {
			setUpdateError("Something went wrong.Please try again later");
			setIsUpdated(false);
		}
	};

	return (
		<div className="modal">
			<div className="modal-content">
				<span onClick={() => handleModal()} className="close">
					&times;
				</span>
				*start editing to update
				<div>
					<form className="update_form" onSubmit={handleSubmit(submitUpdate)}>
						<div className="modal_row">
							<span className="row_title">Name:</span> <br />
							<input className="modal_description" type="text" {...register("name", { required: true })} />
							<br />
							{errors.name && <span className="error_text">*This field is required</span>}
						</div>
						<div className="modal_row">
							<span className="row_title">Email:</span> <br />
							<input className="modal_description" type="email" {...register("email", { required: true })} />
							<br />
							{errors.email && <span className="error_text">*This field is required</span>}
						</div>
						<div className="modal_row">
							<span className="row_title">Occupation:</span> <br />
							<input className="modal_description" type="text" {...register("occupation", { required: true })} />
							<br />
							{errors.occupation && <span className="error_text">*This field is required</span>}
						</div>
						<div className="modal_row">
							<span className="row_title">Bio:</span>
							<br /> <textarea rows={6} className="modal_description" {...register("bio", { required: true })} />
							<br />
							{errors.bio && <span className="error_text">*This field is required</span>}
						</div>
						{isLoading && "updating please wait..."}
						{!isLoading && (
							<button className="btn_close" onClick={() => handleModal()}>
								Close
							</button>
						)}{" "}
						{""}
						{isDirty && !isLoading && (
							<button className="btn" type="submit">
								Submit
							</button>
						)}{" "}
						<br />
						{isupdated && !isLoading && <span>User information successfully upated!</span>}
						{!isLoading && updateError && <p className="error_text">{updateError}</p>}
					</form>
				</div>
			</div>
		</div>
	);
};
export default Modal;
