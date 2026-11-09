import { getLL } from "../../i18n/overlane-i18n.js";

/** Decorative game-link setup wizard teaser — three-step flow. */
export function GameLinkWizardMock() {
    const mocks = getLL().marketing.mocks;
    return (
        <div className="ui-mock ui-mock--wizard" aria-hidden="true">
            <div className="ui-mock__wizard">
                <p className="ui-mock__section-label">{mocks.wizardTitle()}</p>
                <ol className="ui-mock__wizard-steps">
                    <li className="is-done">
                        <span className="ui-mock__wizard-num">1</span>
                        <span className="ui-mock__wizard-text">{mocks.wizardStepDetect()}</span>
                    </li>
                    <li className="is-done">
                        <span className="ui-mock__wizard-num">2</span>
                        <span className="ui-mock__wizard-text">{mocks.wizardStepPlugin()}</span>
                    </li>
                    <li className="is-active">
                        <span className="ui-mock__wizard-num">3</span>
                        <span className="ui-mock__wizard-text">{mocks.wizardStepTest()}</span>
                    </li>
                </ol>
                <div className="ui-mock__wizard-meter">
                    <span style={{ width: "78%" }} />
                </div>
                <p className="ui-mock__wizard-foot">{mocks.wizardWaiting()}</p>
            </div>
        </div>
    );
}
