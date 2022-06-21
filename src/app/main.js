import '../public/styles/normalize.css';
import '../public/styles/style.css';

const ProductCompositions = {
  FISH: 'Головы щучьи с чесночком да свежайшая сёмгушка',
  CHICKEN: 'Филе из цыплят с трюфелями в бульоне',
  GOOSE_LIVER: 'Печень утки разварная с артишоками',
};

const PRODUCT_COMPOSITION_DEFAULT_TEMPLATE = 'Чего сидишь? Порадуй котэ, <a href="#" class="buy">купи.</a>';

const cards = document.querySelectorAll('.cards-list__card');
const buyButtons = document.querySelectorAll('.buy');
const productCompositions = document.querySelectorAll('.product-composition');
const checkboxes = document.querySelectorAll('.card-checkbox');

for(let i = 0; i < cards.length; i++){
  if(cards[i].querySelector('label').classList.contains('disabled')){
    productCompositions[i].innerHTML = `Печалька, ${cards[i].querySelector('h4').textContent} закончился`;
  }

  checkboxes[i].addEventListener('click',
    () => {
      if(checkboxes[i].checked){
        productCompositions[i].innerHTML = ProductCompositions[cards[i].dataset.type];
      } else {
        productCompositions[i].innerHTML = PRODUCT_COMPOSITION_DEFAULT_TEMPLATE;
      }

      cards[i].querySelector('.description').textContent = checkboxes[i].checked ?
        'Котэ не одобряет?' :
        'Сказочное заморское яство';
    }
  );

  cards[i].addEventListener('mouseover',
    () => {
      cards[i].querySelector('.description').textContent = checkboxes[i].checked ?
        'Котэ не одобряет?' :
        'Сказочное заморское яство';
    }
  );

  cards[i].addEventListener('mouseout',
    () => {
      cards[i].querySelector('.description').textContent = 'Сказочное заморское яство';
    }
  );

  buyButtons[i].addEventListener('click',
    (evt) => {
      evt.preventDefault();
      checkboxes[i].checked = true;
      productCompositions[i].innerHTML = ProductCompositions[cards[i].dataset.type];
    });
}
