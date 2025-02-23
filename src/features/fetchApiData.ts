export const fetchApiData = async (api: string) => {
	try {
		const response = await fetch(`${import.meta.env.VITE_API_URL}/api/${api}`, {
			method: 'GET',
			headers: {
				'X-API-KEY': import.meta.env.VITE_X_API_KEY,
				'Content-Type': 'application/json',
			},
		})
		const contentType = response.headers.get('content-type')
		if (!contentType || !contentType.includes('application/json')) {
			throw new Error('Ответ от сервера не в формате JSON')
		}

		if (!response.ok) {
			throw new Error('Ошибка при загрузке фильмов')
		}
		return await response.json()
	} catch (error) {
		console.error('Ошибка загрузки:', error)
		throw error
	}
}
