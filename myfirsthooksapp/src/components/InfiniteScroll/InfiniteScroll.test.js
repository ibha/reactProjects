import React from 'react';
import InfiniteScroll from './InfiniteScroll';
import { shallow } from 'enzyme';

const infiniteScrollTest = () => {
    describe("InfiniteScroll", () => {
        it("should render upate", () => {
            const wrapper = shallow(<InfiniteScroll/>);
        })
    })
}