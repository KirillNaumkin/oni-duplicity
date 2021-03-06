import * as React from "react";
import { connect } from "react-redux";

import { LoadingStatus } from "../../state";

import mapStateToProps, { StateProps } from "./state-props";

export interface AbstractLoadStatusProps {
  children(props: AbstractLoadStatusRenderProps): React.ReactChild;
}
export interface AbstractLoadStatusRenderProps {
  status: LoadingStatus;
  message: string | null;
  errorMessage: string | null;
}

type Props = AbstractLoadStatusProps & StateProps;
class AbstractLoadStatus extends React.Component<Props> {
  render() {
    const { children, status, error, message } = this.props;
    return React.Children.only(
      children({ status, message, errorMessage: error ? error.message : null })
    );
  }
}

export default connect(mapStateToProps)(AbstractLoadStatus);
