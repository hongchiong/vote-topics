import React from 'react';
import { shallow } from 'enzyme';
import Topics from './Topics';

let component;
beforeEach(() => {
  component = shallow(<Topics/>);
});

it('Starts with zero topics', () => {
  //Start with no topic cards
  expect(component.find('TopicCard').exists()).toBe(false);
});

it('Add new Topic', () => {
  //Check add-topic-btn exist
  expect(component.find('.add-topic-btn').length).toEqual(1);
  //Click on add-topic-btn to add Topic
  component.find('.add-topic-btn').simulate('click');
  //Check if Topic now exists
  expect(component.find('TopicCard').exists()).toBe(true);
});

it('Should only show up to 20 Topics', () => {
  //Add 30 Topics
  for (let i = 0; i < 30; i++) {
    component.find('.add-topic-btn').simulate('click');
  };
  //Expect only 20 Topics
  expect(component.find('TopicCard').length).toEqual(20);
});

it('Should show all Topics after toggling show-all button', () => {
  //Add 30 Topics
  for (let i = 0; i < 30; i++) {
    component.find('.add-topic-btn').simulate('click');
  };
  //Click on show-all button
  component.find('.show-all').simulate('click');
  //Expect all topics shown
  expect(component.find('TopicCard').length).toEqual(30);
});



