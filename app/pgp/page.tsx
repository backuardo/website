import { ExternalLink } from "app/components/link";
import { CopyToClipboardButton } from "app/components/copy-to-clipboard-button";
import { PGP_PUBKEY, PGP_FINGERPRINT, PGP_KEYSERVER } from "app/config";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-bold tracking-tighter uppercase">
        PGP public key
      </h1>
      <div className="space-y-4 text-sm">
        <div className="space-y-1">
          <p>
            <span className="font-bold text-gruvbox-lime">Fingerprint: </span>
            {PGP_FINGERPRINT}
          </p>
          <p className="flex space-x-2">
            <span className="font-bold text-gruvbox-lime">Keyserver: </span>
            <ExternalLink href={PGP_KEYSERVER}>keys.openpgp.org</ExternalLink>
          </p>
        </div>
        <div className="bg-neutral-900 border-1 border-stone-500/20 flex items-center justify-center py-3 relative">
          <div className="absolute top-0 right-0 p-3">
            <CopyToClipboardButton text={PGP_PUBKEY} resetTime={3000} />
          </div>
          <pre className="whitespace-pre-wrap break-all text-sm text-stone-300/60">
            {PGP_PUBKEY}
          </pre>
        </div>
      </div>
    </section>
  );
}
