"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const adviceNumber = document.querySelector(".advice__number");
const generateAdvice = document.querySelector(".btn");
const adviceText = document.querySelector(".advice__text");
const API_URL = "https://api.adviceslip.com/advice/";
const SLIP_COUNT = 224;
const getRandomAdvice = () => __awaiter(void 0, void 0, void 0, function* () {
    const slip_id = Math.round(Math.random() * SLIP_COUNT + 1);
    const res = yield fetch(`${API_URL}${slip_id}`);
    const { slip: { id, advice }, } = yield res.json();
    adviceNumber.textContent = `#${id}`;
    adviceText.textContent = `"${advice}"`;
});
document.addEventListener("DOMContentLoaded", getRandomAdvice);
generateAdvice.addEventListener("click", getRandomAdvice);
