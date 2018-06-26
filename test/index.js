/**
 * @auth sce
 * @date 18-6-24
 * @desc
 * */

const Footer = VirtualDom.createElement(
  'footer',
  {
    class: 'footer'
  },
  'this is footer'
);

const Header = VirtualDom.createElement(
  'header',
  {
    class: 'header'
  },
  'this is header'
);

const Root = VirtualDom.createElement(
  'div',
  {
    class: 'root'
  },
  [Header,'this is Ctx', Footer]
);

VirtualDom.renderDOM(Root, document.getElementById('app'));
/**
 * 渲染效果
 * <div class="root">
 *    <div class="header">
 *    this is header
 *    </div>
 *    container
 *    <div class="footer">
 *    this is footer
 *    </div>
 * </div>
 *
 */
