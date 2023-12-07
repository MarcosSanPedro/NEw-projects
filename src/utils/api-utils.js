// Theme Parks API Helper Functions

const BASE_URL = "https://api.themeparks.wiki/v1";

// Fetch destinations
export async function fetchDestinations() {
	const response = await fetch(`${BASE_URL}/destinations`);
	return response.json();
}

// Fetch entity by ID
export async function fetchEntityById(entityID) {
	const response = await fetch(`${BASE_URL}/entity/${entityID}`);
	return response.json();
}

// Fetch children of an entity
export async function fetchEntityChildren(entityID) {
	const response = await fetch(`${BASE_URL}/entity/${entityID}/children`);
	return response.json();
}

// Fetch live data for an entity
export async function fetchEntityLiveData(entityID) {
	const response = await fetch(`${BASE_URL}/entity/${entityID}/live`);
	return response.json();
}

// Fetch upcoming schedule for an entity
export async function fetchEntityUpcomingSchedule(entityID) {
	const response = await fetch(`${BASE_URL}/entity/${entityID}/schedule`);
	return response.json();
}

// Fetch schedule for an entity for a specific year and month
export async function fetchEntityScheduleByYearMonth(entityID, year, month) {
	const response = await fetch(
		`${BASE_URL}/entity/${entityID}/schedule/${year}/${month}`
	);
	return response.json();
}
