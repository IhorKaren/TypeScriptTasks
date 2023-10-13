/*
  Use generics and interfaces to fix the error in the following classes:
*/

interface PageProps {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
