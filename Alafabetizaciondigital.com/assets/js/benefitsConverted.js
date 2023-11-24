
function createBenefits(data, imgPos) {
    const container = document.createElement('div');
    container.className = 'flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap';

    const imageContainer = document.createElement('div');
    imageContainer.className = flex ; items-center; justify-center; w-full; lg:w-1/2 ;${imgPos === 'right' ? 'lg:order-1' : ''} ;

    const img = document.createElement('img');
    img.src = data.image;
    img.alt = 'Benefits';
    img.style.width = '521px';
    img.style.height = '482px';

    imageContainer.appendChild(img);
    container.appendChild(imageContainer);

    const textContainer = document.createElement('div');
    textContainer.className =  flex; flex-wrap; items-center; w-full; lg:w-1/2; ${imgPos === 'right' ? 'lg:justify-end' : ''} ;

    // Here you would add the rest of the elements such as headings, paragraphs etc., similar to the image container
    // ...

    return container;
}

// Example usage:
document.addEventListener('DOMContentLoaded', function() {
    const benefitsData = {
        image: 'path_to_your_image.jpg', // replace with the path to your image
        // ... add the rest of the data needed for your benefits section
    };

    const benefitsSection = createBenefits(benefitsData, 'left'); // or 'right', depending on the image position
    document.body.appendChild(benefitsSection);
});
