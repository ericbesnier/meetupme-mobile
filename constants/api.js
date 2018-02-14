import axios from 'axios';
import { PlatformIOS } from 'react-native';

let url;

if (!PlatformIOS) {
  url = 'http://192.168.56.1:3000/api';
} else {
  url = 'http://localhost:3000/api';
}

axios.defaults.baseURL = url;

const fakeGroupId = '5a69b5adb76bf8066c1976bc';

class MeetupApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/meetups`;
  }

  async fetchGroupMeetups() {
    try {
      const { data } = await axios.get(this.path);
      console.log('MeetupApi', data.meetups);
      return data.meetups;
    } catch (e) {
      console.log(e);
    }
  }
}

export {
  MeetupApi,
};
