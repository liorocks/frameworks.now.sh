import React from 'react';
import Icon from './Icon';

const ComponentsList = ({ frameworks, visible, components }) => {
  function renderHeader() {
    return (
      <thead>
        <tr>
          <th className="is-first">
            <span className="is-dark">Component Name</span>
          </th>
          {frameworks
            .filter(framework => visible.has(framework.slug))
            .map(framework => {
              return (
                <th key={framework.slug}>
                  <span className="is-dark">
                    {framework.name}
                  </span>
                </th>
              );
            })}
        </tr>
      </thead>
    );
  }

  function renderDemoButton(framework, component) {
    return (
      <a
        href={component.supports[framework.slug]}
        target="_blank"
        className="button is-fixed is-small is-info is-outlined"
      >
        <Icon name="eye" />
        <span>Demo</span>
      </a>
    );
  }

  function renderNotAvailableButton() {
    return (
      <button
        data-title="Not Available"
        disabled={false}
        className="button is-static is-tooltip is-fixed is-small is-danger is-outlined"
      >
        <Icon name="eye-slash" />
        <span>N / A</span>
      </button>
    );
  }

  return (
    <div className="section">
      <div className="container is-x">
        <h2 className="title">List of Components</h2>
        <table className="table has-text-centered is-striped is-bordered">
          {renderHeader()}
          <tbody>
            {components.map(component => {
              return (
                <tr key={component.name.toLowerCase()}>
                  <td>
                    <span className="tag is-info">
                      {component.name}
                    </span>
                  </td>

                  {frameworks
                    .filter(framework => visible.has(framework.slug))
                    .map(framework => {
                      return (
                        <td key={framework.slug}>
                          {component.supports[framework.slug] &&
                            renderDemoButton(framework, component)}

                          {!component.supports[framework.slug] &&
                            renderNotAvailableButton()}
                        </td>
                      );
                    })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComponentsList;
