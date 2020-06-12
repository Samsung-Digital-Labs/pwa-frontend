import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
  } from '@ionic/react';
  
  import React from 'react';
  import { useLocation } from 'react-router-dom';
  import { bookmarkOutline, paperPlaneOutline, logOutOutline, logOut, bookOutline, book, handRightOutline, handRight, fileTrayFullOutline, fileTrayFull, paperPlane, chatboxEllipses, chatboxEllipsesOutline } from 'ionicons/icons';
  import './Menu.css';
  
  // Abstract class/interface for
  // information about each page
  interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
  }
  
  // Declaring all the app pages
  const appPages: AppPage[] = [
    {
      title: 'Classrooms',
      url: '/page/classrooms',
      iosIcon: bookOutline,
      mdIcon: book
    },
    {
      title: 'Join',
      url: '/page/join',
      iosIcon: paperPlaneOutline,
      mdIcon: paperPlane
    },
    {
      title: 'Assignments',
      url: '/page/assignments',
      iosIcon: fileTrayFullOutline,
      mdIcon: fileTrayFull
    },
    {
      title: 'Chat',
      url: '/page/chat',
      iosIcon: chatboxEllipsesOutline,
      mdIcon: chatboxEllipses
    },
    {
      title: 'Queries',
      url: '/page/queries',
      iosIcon: handRightOutline,
      mdIcon: handRight
    },
    {
      title: 'Logout',
      url: '/page/logout',
      iosIcon: logOutOutline,
      mdIcon: logOut
    }
  ];
  
  // Labels TODO
  const labels = ['LABEL1', 'LABEL2', 'LABEL3', 'LABEL4', 'LABEL5', 'Reminders'];
  
  const Menu: React.FC = () => {
    const location = useLocation();
  
    return (
      <IonMenu contentId="main" type="overlay" color = "dark">
        <IonContent color = "dark">
          <IonList id="inbox-list" color = "dark">
            <IonListHeader color = "dark">BlackBoard</IonListHeader>
            <IonNote color = "dark">user@somewhere.com</IonNote>
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle  key={index} autoHide={false} >
                  <IonItem color = "dark" className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon  slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>
  
          <IonList id="labels-list" >
            <IonListHeader color = "dark">Labels</IonListHeader>
            {labels.map((label, index) => (
              <IonItem color = "dark" lines="none" key={index}>
                <IonIcon slot="start" icon={bookmarkOutline} />
                <IonLabel>{label}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonMenu>
    );
  };
  
  export default Menu;
  