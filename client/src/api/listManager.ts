import { Anime } from "../types/Anime";

const listCacheName = 'listCache'
const baseUrl = 'http://localhost:8080/api'

export async function addToList(body: Anime) {
	const req = await fetch(`${baseUrl}`)
	// todo
}

export async function getList(setState: any, type: string) {
	const req = await fetch(`${baseUrl}/anime/list`)
	const list: Anime[] = await req.json()

	sessionStorage.setItem(listCacheName, JSON.stringify(list))
	setState(list)
}

export async function setCacheList(list: Anime[]) {
	sessionStorage.setItem(listCacheName, JSON.stringify(list))
}

export async function addNewToCacheList(anime: Anime) {
	const list: Anime[] = JSON.parse(sessionStorage.getItem(listCacheName)!)

	list.push(anime)
	sessionStorage.setItem(listCacheName, JSON.stringify(list))
}

export async function removeFromCacheList(anime: Anime) {
	const list: Anime[] = JSON.parse(sessionStorage.getItem(listCacheName)!)

	const id = list.map((val, idx) => {
		if (val.mal_id === anime.mal_id) {
			list.splice(idx, 1)
			sessionStorage.setItem(listCacheName, JSON.stringify(list))
			return
		}
	})
}

export async function getCacheList() {
	return sessionStorage.getItem(listCacheName)
}