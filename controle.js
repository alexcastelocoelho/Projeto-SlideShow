'use strict ';

const images = [
    { 'id': '1', 'url':'./slideshow/chrono.jpg' },
    { 'id': '2', 'url':'./slideshow/inuyasha.jpg' },
    { 'id': '3', 'url':'./slideshow/ippo.png' },
    { 'id': '4', 'url':'./slideshow/tenchi.jpg' },
    { 'id': '5', 'url':'./slideshow/tenjhotenge.jpg' },
    { 'id': '6', 'url':'./slideshow/yuyuhakusho.jpg' },
]

const containerItems = document.querySelector('#container-items')


const loadImages = ( images, container ) => {
    images.forEach (Image => {
        container.innerHTML += `
        <div class='item'>
           <img src='${Image.url}'
        </div>
        `
    })

}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]); 
    items = document.querySelectorAll('.item');

}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);

document.querySelector('#next').addEventListener('click', next);