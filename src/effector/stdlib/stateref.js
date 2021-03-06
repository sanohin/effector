//@flow
import type {StateRef} from './index.h'
import {stringRefcount} from './refcount'
const nextID = stringRefcount()
export const createStateRef = (current: any): StateRef => ({
  id: nextID(),
  current,
})

export const readRef = ({current}: StateRef) => current
export const writeRef = (ref: StateRef, value: any) => (ref.current = value)
