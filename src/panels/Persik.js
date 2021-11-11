import React from 'react';
import PropTypes from 'prop-types';
  
import { Panel, PanelHeader, PanelHeaderBack, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Persik.css';

const Persik = props => (
   <Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Меню создание ботов
		</PanelHeader>

	</Panel>
);

//Persik.propTypes = {
	//id: PropTypes.string.isRequired,
	//go: PropTypes.func.isRequired,
//};

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			//title: PropTypes.string,
		}),
	}),
	};

export default Persik;