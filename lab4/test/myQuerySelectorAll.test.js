const { JSDOM } = require('jsdom');
const myQuerySelectorAll = require('../src/myQuerySelectorAll');

// Create a virtual DOM
const dom = new JSDOM(`
  <!DOCTYPE html>
  <html>
  <body>
    <div id="container">
      <div class="item">Item 1</div>
      <span class="item">Item 2</span>
      <div id="nested">
        <p class="item">Nested Item</p>
      </div>
    </div>
  </body>
  </html>
`);
const { document } = dom.window;

describe('myQuerySelectorAll', () => {
  test('should find elements by tag name', () => {
    const divs = myQuerySelectorAll('div', document);
    expect(divs).toHaveLength(3);
  });

  test('should find elements by class name', () => {
    const items = myQuerySelectorAll('.item', document);
    expect(items).toHaveLength(3);
    expect(items[0].textContent).toBe('Item 1');
  });

  test('should find element by ID', () => {
    const nested = myQuerySelectorAll('#nested', document);
    expect(nested).toHaveLength(1);
    expect(nested[0].tagName).toBe('DIV');
  });

  test('should find elements by tag and class combination', () => {
    const divItems = myQuerySelectorAll('div.item', document);
    expect(divItems).toHaveLength(1);
    expect(divItems[0].textContent).toBe('Item 1');
  });

  test('should find nested elements', () => {
    const nestedItems = myQuerySelectorAll('#nested .item', document);
    expect(nestedItems).toHaveLength(1);
    expect(nestedItems[0].textContent).toBe('Nested Item');
  });

  test('should return empty array for non-existent selector', () => {
    const none = myQuerySelectorAll('.nonexistent', document);
    expect(none).toHaveLength(0);
  });
});