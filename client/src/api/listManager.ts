import { EntryList, KnownAnime } from "../types/Database";
import { Anime } from "../types/Anime";
import { Manga } from "../types/Manga";
import { getHeaders } from "./useful";

export const listCacheName = 'listCache'
const baseUrl = 'http://localhost:8080/api'

function generateKnownAnime(body: Anime | Manga | any, type: 'anime' | 'manga') {
	const newBody: KnownAnime = {
		mal_id: body.mal_id,
		name: body.title,
		is_anime: type === 'anime',
		img_url: body.images.jpg.small_image_url,
		total_episodes: type === 'anime' ?
			(body.episodes ? body.episodes : 0) :
			(body.chapters ? body.chapters : 0)
	}
	return newBody
}


export async function getList(setState: any, setLoading: any, type: 'anime' | 'manga') {
	const req = await fetch(`${baseUrl}/${type}/list`, {
		headers: getHeaders()
	})

	setLoading(false)
	if (req.status !== 200) {
		setCacheList([], type)
		setState([])
		return
	}

	const list: EntryList[] = await req.json()

	setCacheList(list, type)
	setState(list)
}

export async function addToList(body: Anime | Manga | any, type: 'anime' | 'manga') {
	const anime = generateKnownAnime(body, type)
	const newBody: EntryList = {
		is_anime: anime.is_anime,
		anime
	}	

	const req = await fetch(`${baseUrl}/${type}/list`, {
		method: 'POST',
		body: JSON.stringify(newBody),
		headers: getHeaders()
	})
	const data = await req.json()

	if (data.success)
		addNewToCacheList(newBody, type)

	return data.success
}

export async function editList(body: Anime | Manga | any, type: 'anime' | 'manga') {
	const req = await fetch(`${baseUrl}/${type}/list`, {
		method: 'PUT',
		body: JSON.stringify(generateKnownAnime(body, type)),
		headers: getHeaders()
	})
	const data = await req.json()

	if (data.success)
		editCacheList(body, type)
	
	return data.success
}

export async function deleteList(body: Anime | Manga, type: 'anime' | 'manga') {
	const req = await fetch(`${baseUrl}/${type}/list/${body.mal_id}`, {
		method: 'DELETE',
		headers: getHeaders()
	})
	const data = await req.json()

	if (!data.success)
		return getCacheList(type)

	removeFromCacheList(body, type)
}


function setCacheList(list: EntryList[], type: 'anime' | 'manga') {
	sessionStorage.setItem(listCacheName + type, JSON.stringify(list))
}

function addNewToCacheList(anime: EntryList, type: 'anime' | 'manga') {
	const list = getCacheList(anime.is_anime ? 'anime' : 'manga')

	list.push(anime)
	setCacheList(list, type)
}

function editCacheList(anime: EntryList, type: 'anime' | 'manga') {
	const list = getCacheList(type)

	const id = list.map((val: EntryList, idx: number) => {
		if (val.anime.mal_id === anime.anime.mal_id) {
			list[idx] = anime
			setCacheList(list, type)
			return
		}
	})
}

function removeFromCacheList(anime: Anime | Manga, type: 'anime' | 'manga') {
	const list = getCacheList(type)

	const id = list.map((val: EntryList, idx: number) => {
		if (val.anime.mal_id === anime.mal_id) {
			list.splice(idx, 1)
			setCacheList(list, type)
			return
		}
	})
}

export function getCacheList(type: 'anime' | 'manga') {
	const list = sessionStorage.getItem(listCacheName + type)!
	if (!list)
		return []
	
	return JSON.parse(list)
}

export function checkInList(entry: Anime | Manga, type: 'anime' | 'manga') {
	const list: EntryList[] = getCacheList(type)

	for (let i of list) {
		if (i.anime.mal_id === entry.mal_id)
			return i
	}

	return false
}


export function getLastList(): 'anime' | 'manga' {
	const lastList = localStorage.getItem('lastList')
	if (lastList !== 'anime' && lastList !== 'manga') {
		setLastList('anime')
		return getLastList()
	}
	
	return lastList
}

export function setLastList(value: 'anime' | 'manga') {
	localStorage.setItem('lastList', value)
}