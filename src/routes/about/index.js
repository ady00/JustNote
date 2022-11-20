import { h } from 'preact';
import { Link } from 'preact-router/match';

const NotFound = () => (
  <div class="wrap wrap--thin lift-children">
    <h1 class="mb20">About JustNote</h1>
    <div>
      <p>JustNote is a smart and personal diary system.</p>
      <p>
        It's important to document our day. Whether we need to vent or just someone
        to confide in, writing our thoughts is essential for our well-beings. Therefore,
        JustNote acts as a virtual diary for you to document in; everything is kept highly 
        personal, and no data is passed to a central server. 
      </p>
      <p>
        Alongside as traditional entries, JustNote can be used to track
        sleep, medicines, exercise, habits, or really just anything.
      </p>
      <p className="mb20">
        <small>
          Developed during LEC-Hacks by Foothill A.
        </small>
      </p>
    </div>
  </div>
);

export default NotFound;
