// Import the necessary modules and libraries
import assert from 'chai';
import { mount } from 'enzyme';
import { JSDOM } from 'jsdom';
import React from 'react';
import Home from '../../src/components/home';

// Simulate a DOM environment using JSDOM
const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.window = window;
global.document = window.document;

describe('Home Component', function () {
    let wrapper;
  
    before(function () {
      wrapper = mount(<Home />);
    });
  
    it('Popup should be initially visible', function () {
      const popupDiv = wrapper.find('#popupDiv');
      assert.isTrue(popupDiv.exists());
      assert.equal(popupDiv.prop('style').visibility, 'visible');
    });
  
    it('handleInputChange should update userQuery state', function () {
      const event = { target: { value: 'testQuery' } };
      wrapper.instance().handleInputChange(event);
      assert.equal(wrapper.state('userQuery'), 'testQuery');
    });
  
    it('handleGetShow should update results state after API call', async function () {
      // Mock axios.get to return a response
      const mockResponse = {
        data: {
          tv_shows: [
            {
              name: 'Test Show',
              network: 'Test Network',
              start_date: '2023-01-01',
              status: 'Running',
            },
          ],
        },
      };
      const axios = require('axios');
      axios.get = () => Promise.resolve(mockResponse);
  
      const event = { preventDefault: () => {} };
      await wrapper.instance().handleGetShow(event);
  
      const results = wrapper.state('results');
      assert.deepEqual(results, {
        name: 'Test Show',
        network: 'Test Network',
        start_date: '2023-01-01',
        status: 'Running',
      });
    });

});