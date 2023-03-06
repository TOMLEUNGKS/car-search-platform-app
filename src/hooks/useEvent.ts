import { TinyEmitter } from "tiny-emitter";

let emmiter = new TinyEmitter();

export default function useEvent() {
  if (!emmiter) {
    emmiter = new TinyEmitter();
  }
  return emmiter;
}
