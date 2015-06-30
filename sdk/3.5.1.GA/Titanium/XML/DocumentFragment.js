function DocumentFragment(properties) {
	properties = properties || {};

	this.ATTRIBUTE_NODE = properties.ATTRIBUTE_NODE || undefined;
	this.CDATA_SECTION_NODE = properties.CDATA_SECTION_NODE || undefined;
	this.COMMENT_NODE = properties.COMMENT_NODE || undefined;
	this.DOCUMENT_FRAGMENT_NODE = properties.DOCUMENT_FRAGMENT_NODE || undefined;
	this.DOCUMENT_NODE = properties.DOCUMENT_NODE || undefined;
	this.DOCUMENT_TYPE_NODE = properties.DOCUMENT_TYPE_NODE || undefined;
	this.ELEMENT_NODE = properties.ELEMENT_NODE || undefined;
	this.ENTITY_NODE = properties.ENTITY_NODE || undefined;
	this.ENTITY_REFERENCE_NODE = properties.ENTITY_REFERENCE_NODE || undefined;
	this.NOTATION_NODE = properties.NOTATION_NODE || undefined;
	this.PROCESSING_INSTRUCTION_NODE = properties.PROCESSING_INSTRUCTION_NODE || undefined;
	this.TEXT_NODE = properties.TEXT_NODE || undefined;
	this.apiName = 'Titanium.XML.DocumentFragment';
	this.attributes = properties.attributes || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.childNodes = properties.childNodes || undefined;
	this.firstChild = properties.firstChild || undefined;
	this.lastChild = properties.lastChild || undefined;
	this.localName = properties.localName || undefined;
	this.namespaceURI = properties.namespaceURI || undefined;
	this.nextSibling = properties.nextSibling || undefined;
	this.nodeName = properties.nodeName || undefined;
	this.nodeType = properties.nodeType || undefined;
	this.nodeValue = properties.nodeValue || undefined;
	this.ownerDocument = properties.ownerDocument || undefined;
	this.parentNode = properties.parentNode || undefined;
	this.prefix = properties.prefix || undefined;
	this.previousSibling = properties.previousSibling || undefined;
	this.text = properties.text || undefined;
	this.textContent = properties.textContent || undefined;

	return this;
}

DocumentFragment.prototype.addEventListener = function(){};

DocumentFragment.prototype.appendChild = function(){ return {}; };

DocumentFragment.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

DocumentFragment.prototype.cloneNode = function(){ return {}; };

DocumentFragment.prototype.fireEvent = function(){};

DocumentFragment.prototype.getApiName = function(){ return this.apiName; };

DocumentFragment.prototype.getAttributes = function(){ return this.attributes; };

DocumentFragment.prototype.getBubbleParent = function(){ return this.bubbleParent; };

DocumentFragment.prototype.getChildNodes = function(){ return this.childNodes; };

DocumentFragment.prototype.getFirstChild = function(){ return this.firstChild; };

DocumentFragment.prototype.getLastChild = function(){ return this.lastChild; };

DocumentFragment.prototype.getLocalName = function(){ return this.localName; };

DocumentFragment.prototype.getNamespaceURI = function(){ return this.namespaceURI; };

DocumentFragment.prototype.getNextSibling = function(){ return this.nextSibling; };

DocumentFragment.prototype.getNodeName = function(){ return this.nodeName; };

DocumentFragment.prototype.getNodeType = function(){ return this.nodeType; };

DocumentFragment.prototype.getNodeValue = function(){ return this.nodeValue; };

DocumentFragment.prototype.getOwnerDocument = function(){ return this.ownerDocument; };

DocumentFragment.prototype.getParentNode = function(){ return this.parentNode; };

DocumentFragment.prototype.getPrefix = function(){ return this.prefix; };

DocumentFragment.prototype.getPreviousSibling = function(){ return this.previousSibling; };

DocumentFragment.prototype.getText = function(){ return this.text; };

DocumentFragment.prototype.getTextContent = function(){ return this.textContent; };

DocumentFragment.prototype.hasAttributes = function(){ return true; };

DocumentFragment.prototype.hasChildNodes = function(){ return true; };

DocumentFragment.prototype.insertBefore = function(){ return {}; };

DocumentFragment.prototype.isSupported = function(){ return true; };

DocumentFragment.prototype.normalize = function(){};

DocumentFragment.prototype.removeChild = function(){ return {}; };

DocumentFragment.prototype.removeEventListener = function(){};

DocumentFragment.prototype.replaceChild = function(){ return {}; };

DocumentFragment.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

DocumentFragment.prototype.setLocalName = function(property){ this.localName = property; };

DocumentFragment.prototype.setNodeValue = function(property){ this.nodeValue = property; };

DocumentFragment.prototype.setPrefix = function(property){ this.prefix = property; };

module.exports = function(properties){ return new DocumentFragment(properties); };