import { useLoaderData } from "react-router-dom";
import { Events } from "../components/Events";
import { themParks } from "../utils/sampleData";
import { useEffect } from "react";



export function EventsPage() {
	const data = useLoaderData()

	useEffect(()=>{
		console.log('loader', data)
	}, [data])

	return (
		<div>
			<div className="grid grid-cols-1 m-auto w-fit mt-6 gap-5 md:grid-cols-2 xl:grid-cols-3">
				<Events
					image="Christmas-Events.jpg"
					tittle="Hola"
					description="sa"
					time="Friday 27, 9:00pm-12:am"
					badges={["hola", "hi"]}
				/>
				{ themParks
					? themParks.map((themPark) => (
							<Events
								key={themPark.name}
								image={themPark.image}
								tittle={themPark.name}
								description={themPark.description}
								badges={[themPark.city, themPark.state, themPark.country]}
							/>
					  ))
					: null }

					

				<Events
					image="Christmas-Events.jpg"
					tittle="Hola"
					description="hi"
					badges={["hola", "hi"]}
				/>
				<Events
					image="Christmas-Events.jpg"
					tittle="Hola"
					description="hi"
					badges={["hola", "hi"]}
				/>
				<Events
					image="Christmas-Events.jpg"
					tittle="Hola"
					description="hi"
					badges={["hola", "hi"]}
				/>
			</div>
		</div>
	);
}
