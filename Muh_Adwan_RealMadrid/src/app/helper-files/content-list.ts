import { Content } from './content-interface';

//create a class called ContentList
export class ContentList {
    private contentArray: Content[]; //defined private as an array 

    constructor() {
        this.contentArray = []; //A constructor that initially sets the array to be empty
    }

    get content(): Content[] {
        return this.contentArray; //getter function to return the array
    }

    add(contentItem: Content): void {
        this.contentArray.push(contentItem); //An add function that adds 1 Content item to the end of the array
    }

    get itemCount(): number {
        return this.contentArray.length; //A function that returns the number of items in the array
    }

    //A function that returns the HTML for a single item in the array
    //bonus question
    getContentHtml(index: number): string {
        const contentItem = this.contentArray[index]; //get the content item from the array
        const { title, description, creator, imgURL, type } = contentItem; //destructure the content item
        const imageTag = `<img src="${imgURL}" alt="${title}">`; //
        return `
            <h1>${title}</h1>
            <p>${description}</p>
            <p>Creator: ${creator}</p>
            ${imageTag}
            <p>Type: ${type}</p>
        `;
    }
}