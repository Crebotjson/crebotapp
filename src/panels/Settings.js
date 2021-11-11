import React from 'react';
import PropTypes from 'prop-types';
  
import { Panel, PanelHeader, PanelHeaderBack, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Settings = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
			<PanelHeader>
			  Настройки
     </PanelHeader>
			<Div>
				<Button stretched size="l" mode="primary" onClick="" data-to="">
					Уведомление выкл
				</Button>
			</Div>
			<Div>
				<Button stretched size="l" mode="primary" onClick="" data-to="">
					Уведомление вкл
				</Button>
			</Div>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="home">
					Выйти в меню
				</Button>
			</Div>
	</Panel>
);

//Persik.propTypes = {
	//id: PropTypes.string.isRequired,
	//go: PropTypes.func.isRequired,
//};
Settings.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Settings;