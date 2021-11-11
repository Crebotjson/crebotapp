import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>CreBot</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">Ваш профиль</Header>}>  
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>

				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}			
			</Cell>
		</Group>}		
			  

		<Group header={<Header mode="secondary">Параметры</Header>}>
			<Div>
				<Button stretched size="l" mode="primary" onClick={go} data-to="persik">
					Создать бота
				</Button>
			</Div>
			<Div>
				<Button stretched size="l" mode="primary" onClick={go} data-to="settings">
					Настройки
				</Button>
			</Div>
			<Div>
				<Button stretched size="l" mode="primary" Link href='http://ws9958.freecastle.site/document.html' data-to="persik">
					Помощь
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
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

export default Home;
