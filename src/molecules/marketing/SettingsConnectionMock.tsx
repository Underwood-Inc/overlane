import { getLL } from "../../i18n/overlane-i18n.js";
import { MockConsoleShell } from "./MockConsoleShell.js";

/** Decorative Settings connection snippet (HTTP server + game link). */
export function SettingsConnectionMock() {
    const mocks = getLL().marketing.mocks;
    return (
        <MockConsoleShell activeNav="settings" className="ui-mock--compact">
            <div className="ui-mock__health">
                <span className="ui-mock__pill ui-mock__pill--ok">{mocks.serverRunning()}</span>
                <span className="ui-mock__pill ui-mock__pill--ok">{mocks.gameLinked()}</span>
            </div>
            <div className="ui-mock__content ui-mock__content--settings">
                <p className="ui-mock__section-label">{mocks.httpServer()}</p>
                <dl className="ui-mock__settings-dl">
                    <div>
                        <dt>{mocks.bindAddress()}</dt>
                        <dd>127.0.0.1</dd>
                    </div>
                    <div>
                        <dt>{mocks.port()}</dt>
                        <dd className="ui-mock__mono">8080</dd>
                    </div>
                    <div>
                        <dt>{mocks.overlayBaseUrl()}</dt>
                        <dd className="ui-mock__mono">http://127.0.0.1:8080/overlay/</dd>
                    </div>
                </dl>
                <p className="ui-mock__section-label">{mocks.gameLink()}</p>
                <p className="ui-mock__settings-hint">
                    {mocks.gameLinkStatusBeforePing()} <span className="ui-mock__mono">120 ms</span>
                </p>
            </div>
        </MockConsoleShell>
    );
}
