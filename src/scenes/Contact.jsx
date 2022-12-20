import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault();
        }
    }

	return(
		<section id="contact" className="full-height px-lg-5">
			<div className="container">
				<div className="row pb-4 mb-3">
					<div className="col-md-12">
						<h1 className="">CONTACT ME TO GET STARTED</h1>
					</div>
				</div>

				{/* CONTACT FORM */}
				<form 
					action="https://formsubmit.co/2c2db7427fdf62682e555caabb43cf5d"
					target="_blank"
					onSubmit={onSubmit}
					method="POST"
					className="contact-form row"
				>
					<div className="form-field col-lg-6">
						
						<input
							type="text"
							id="name"
							className="input-text mb-3"
							{...register("name", {
								required: true,
								maxLength: 100,
							})}
						/>
						<label className="label" for="name">Your Name</label>
						{errors.name && (
							<p>
								{errors.name.type === 'required' && "This field is required."}
								{errors.name.type === 'maxLength' && "Max length is 100 characters."}
							</p>
						)}
						
					</div>

					<div className="form-field col-lg-6">
						<input
							className="input-text mb-3"
							type="email"
							id="email"
							{...register("email", {
								required: true,
								pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							})}
						/>
						<label className="label" for="email">Email</label>

						{errors.email && (
							<p>
								{errors.email.type === 'required' && "This field is required."}
								{errors.email.type === 'pattern' && "Invalid email address."}
							</p>
						)}
					</div>

					<div className="form-field col-lg-12">
						<textarea
							className="input-text mb-3"
							rows="4"
							cols="50"
							id="message"
							{...register("message", {
								required: true,
								maxLength: 2000
							})}
						/>
						<label className="label" for="message">Message</label>

						{errors.message && (
							<p>
								{errors.message.type === 'required' && "This field is required."}
								{errors.message.type === 'maxLength' && "Max length is 2000 characters."}
							</p>
						)}
					</div>

					<div className="col-lg-3">
						<button
							className="submit-btn "
							type="submit"
						>
							SEND ME A MESSAGE
						</button>
					</div>

				</form>
			</div>
		</section>
	)
}

export default Contact;