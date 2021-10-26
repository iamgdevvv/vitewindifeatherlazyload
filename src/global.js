import 'virtual:windi.css'
import './global.css'

import './layout/Header'
import './layout/Main'

import LazyLoad from "vanilla-lazyload"
const pageLazyLoad = new LazyLoad()

import * as Feather from 'feather-icons'
Feather.replace()