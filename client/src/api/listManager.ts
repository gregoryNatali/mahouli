import { EntryList, KnownAnime } from "../types/Database";
import { Anime } from "../types/Anime";
import { Manga } from "../types/Manga";
import { getHeaders } from "./useful";

const listCacheName = 'listCache'
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
		setState([])
		setCacheList([], type)
		return
	}

	const list: KnownAnime = await req.json()

	// setCacheList(list, type)
	setState(list)
}

export async function addToList(body: Anime | Manga | any, type: 'anime' | 'manga') {
	const newBody: EntryList = {
		anime: generateKnownAnime(body, type),
		is_anime: type === 'anime'
	}	

	const req = await fetch(`${baseUrl}/${type}/list`, {
		method: 'POST',
		body: JSON.stringify(newBody),
		headers: getHeaders()
	})
	const data = await req.json()

	if (data.success)
		addNewToCacheList(body, type)

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

export async function deleteList(body: KnownAnime, type: 'anime' | 'manga') {
	const req = await fetch(`${baseUrl}/${type}/list/${body.id}`, {
		method: 'DELETE',
		headers: getHeaders()
	})
	const data = await req.json()

	if (data.success)
		removeFromCacheList(body, type)
	
	return data.success
}


function setCacheList(list: Anime[], type: 'anime' | 'manga') {
	sessionStorage.setItem(listCacheName + type, JSON.stringify(list))
}

function addNewToCacheList(anime: KnownAnime, type: 'anime' | 'manga') {
	const list = getCacheList(anime.is_anime ? 'anime' : 'manga')

	list.push(anime)
	setCacheList(list, type)
}

function editCacheList(anime: KnownAnime, type: 'anime' | 'manga') {
	const list = getCacheList(type)

	const id = list.map((val: KnownAnime, idx: number) => {
		if (val.mal_id === anime.mal_id) {
			list[idx] = anime
			setCacheList(list, type)
			return
		}
	})
	console.log('nothing editted from ListCache' + type)
}

function removeFromCacheList(anime: KnownAnime, type: 'anime' | 'manga') {
	const list = getCacheList(type)

	const id = list.map((val: KnownAnime, idx: number) => {
		if (val.mal_id === anime.mal_id) {
			list.splice(idx, 1)
			setCacheList(list, type)
			return
		}
	})
	console.log('nothing removed from ListCache' + type)
}

export function getCacheList(type: 'anime' | 'manga'):  any[] {
	const list = JSON.parse(sessionStorage.getItem(listCacheName + type)!)
	if (!list)
		return []
	
	return list
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