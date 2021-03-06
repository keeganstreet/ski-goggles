import * as moment from "moment";
import * as React from "react";
import { Grid, Icon, Image, Label } from "semantic-ui-react";

import { generateImageUrl } from "../Helpers";

interface Props {
  logo: string;
  title: string;
  timeStamp: number;
}

export default class Title extends React.Component<Props> {
  public render() {
    return (
      <Grid>
        <Grid.Column floated="left" width={8}>
          <Icon name="dropdown" />
          <Image src={generateImageUrl(this.props.logo)} avatar spaced />
          <span>{this.props.title}</span>
        </Grid.Column>
        <Grid.Column floated="right" width={4} className="large screen only">
          <Label name="timeStamp">{formatTime(this.props.timeStamp)}</Label>
        </Grid.Column>
      </Grid>
    );
  }
}

const formatTime = (timeStamp: number): string => {
  return moment(timeStamp).format("MMMM Do YYYY HH:mm:ss:SSS");
};
