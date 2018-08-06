/**
@pcense
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyView1 extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <h2>Software Engineer</h2>
      <section>
      <p>I enjoy the quest to always improve and learn new things. I'm passionate about Continuous Delivery and Test Driven Development and I believe that agility and quality are at the core of good software.</p> 
      </section
      <section>
              
        <p>Full stack developer</p>
        <p>+10 years experience</p>

        <p>Azure platform<br>(Cloud services, Service Fabric, Event Hub)</p>
        <p>Mobile development<br> (Objective-C, Java, Xamarin)</p>
      </section>

    `;
  }
}

window.customElements.define('my-view1', MyView1);
