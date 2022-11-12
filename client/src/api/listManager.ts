import { Anime } from "../types/Anime";
import { Manga } from "../types/Manga";
import { getHeaders } from "./useful";

const listCacheName = 'listCache'
const baseUrl = 'http://localhost:8080/api'

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

	const list: Anime[] | any = await req.json()

	setCacheList(list.results, type)
	setState(list)
}

export async function addToList(body: Anime | Manga, type: 'anime' | 'manga') {
	const req = await fetch(`${baseUrl}/${type}/list`, {
		body: JSON.stringify(body),
		headers: getHeaders()
	})
	const data = await req.json()

	if (data.success)
		addNewToCacheList(body, type)
	return data.success
}

function setCacheList(list: Anime[], type: 'anime' | 'manga') {
	sessionStorage.setItem(listCacheName + type, JSON.stringify(list))
}

function addNewToCacheList(anime: Anime | Manga, type: 'anime' | 'manga') {
	const list = getCacheList(type)

	list.push(anime)
	setCacheList(list, type)
}

function editCacheList(anime: Anime | Manga, type: 'anime' | 'manga') {
	const list = getCacheList(type)

	const id = list.map((val: Anime | Manga, idx: number) => {
		if (val.mal_id === anime.mal_id) {
			list[idx] = anime
			setCacheList(list, type)
			return
		}
	})
	console.log('nothing editted from ListCache' + type)
}

function removeFromCacheList(anime: Anime | Manga, type: 'anime' | 'manga') {
	const list = getCacheList(type)

	const id = list.map((val: Anime | Manga, idx: number) => {
		if (val.mal_id === anime.mal_id) {
			list.splice(idx, 1)
			setCacheList(list, type)
			return
		}
	})
	console.log('nothing removed from ListCache' + type)
}

function getCacheList(type: 'anime' | 'manga') {
	return JSON.parse(sessionStorage.getItem(listCacheName + type)!)
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