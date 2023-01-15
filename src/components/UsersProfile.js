import React from "react";
import Usercard from "./Usercard";

import { useGetUsersQuery } from "../features/api/apiSlice";
import "./userprofile.css";
import Loading from "./Loading";

function UsersProfile() {
	const { data: userState, isLoading, isSuccess, isError } = useGetUsersQuery();

	return (
		<div className="profile_container">
			{isLoading && <Loading />}
			{isSuccess && (
				<>
					{userState.map((user) => (
						<Usercard user={user} key={user._id} />
					))}
				</>
			)}

			{isError && (
				<div>
					<h3>
						Oops something went wrong.Don't worry <br />
						we have alerted our developers team and they are currently working on the issue, <br />
						meanwhile please try reloading the page or visit us later.
					</h3>
				</div>
			)}
		</div>
	);
}

export default React.memo(UsersProfile);
