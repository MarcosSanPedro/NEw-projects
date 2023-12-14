import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faUser,
	faThumbsUp,
	faThumbsDown,
} from '@fortawesome/free-solid-svg-icons'

const UserProfile = () => {
	const [likes, setLikes] = useState(0)
	const [dislikes, setDislikes] = useState(0)

	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="bg-white p-8 rounded shadow-lg">
				<div className="flex items-center mb-4">
					<div className="flex-shrink-0">
						<FontAwesomeIcon
							icon={faUser}
							className="text-4xl text-gray-500"
						/>
					</div>
					<div className="ml-4">
						<h1 className="text-2xl font-semibold">
							Nombre de Usuario
						</h1>
						<p className="text-gray-500">
							Correo Electrónico: usuario@example.com
						</p>
					</div>
				</div>
				<div className="flex items-center">
					<div className="mr-4">
						<FontAwesomeIcon
							icon={faThumbsUp}
							className="text-green-500 text-xl"
						/>
						<p className="text-gray-500 mt-1">Likes: {likes}</p>
					</div>
					<div>
						<FontAwesomeIcon
							icon={faThumbsDown}
							className="text-red-500 text-xl"
						/>
						<p className="text-gray-500 mt-1">
							Dislikes: {dislikes}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserProfile
